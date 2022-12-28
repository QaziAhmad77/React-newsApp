#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <fcntl.h>
#include <signal.h>
#include <sys/time.h>
#include <time.h>

struct sigaction act;

/* Placeholder function to avoid quitting when receiving a SIGUSR1 */
void action(){};
/* Function executed by each player, to play the dice */
void player(char *name, int playerId, int fd);
/* Function executed by the referee, to print current scores and check for a winner */
void checkWinner(int fd, char *name);

int main(int argc, char *argv[])
{
    int fd;
	
	act.sa_handler = action;
	act.sa_flags = 0;
    pid_t pid1, pid2, pid3;
    printf("DiceGame: a 3-players game with a referee\n\n");

    // Creating the file before forking
    if ((fd = open("sharedFile1.txt", O_CREAT | O_WRONLY | O_TRUNC, 00777)) == -1)
    {
        perror("File problem");
        exit(1);
    }
    else
    {
        // Writing three zero-integer values to the file
        int threeZeros[3];
      //  threeZeros = malloc(3 * sizeof(int));
        threeZeros[0] = 0;
        threeZeros[1] = 0;
        threeZeros[2] = 0;
        write(fd, threeZeros, 3 * sizeof(int));
        close(fd);
      //  free(threeZeros);
    }

    // Creating the players and calling the common function "player"
    if ((pid1 = fork()) == 0)
        player("Wisal", 1, fd);
    if ((pid2 = fork()) == 0)
        player("Salman", 2, fd);
    if ((pid3 = fork()) == 0)
        player("Fatima", 3, fd);
    sleep(1);
  
    sigaction(SIGUSR1,&act,NULL);
	while (1)
    {
        // Make the players play in order: Wisal, Salman then Fatima
        fd = open("sharedFile1.txt", O_RDONLY);
        checkWinner(fd, "Wisal");
        printf("Referee: Wisal plays\n\n");
        kill(pid1, SIGUSR1);
        pause();
        checkWinner(fd, "Salman");
        printf("Referee: Salman plays\n\n");
        kill(pid2, SIGUSR1);
        pause();
        checkWinner(fd, "Fatima");
        printf("Referee: Fatima plays\n\n");
        kill(pid3, SIGUSR1);
        pause();
    }
}

void player(char *name, int playerId, int fd)
{
    fd = open("sharedFile1.txt", O_RDONLY);
    int dice, oldScore[1];
    while (1)
    {
        //signal(SIGUSR1, action);
        sigaction(SIGUSR1,&act,NULL);
		pause();
        // Reading the old score
        if (playerId == 1) // Wisal
        {
            lseek(fd, 0, SEEK_SET);
            read(fd, oldScore, sizeof(int));
            printf("Wisal: my current score is: %d\n", oldScore[0]);
        }
        else if (playerId == 2) // Salman
        {
            lseek(fd, sizeof(int), SEEK_SET);
            read(fd, oldScore, sizeof(int));
            printf("Salman: my current score is: %d\n", oldScore[0]);
        }
        else // Fatima
        {
            lseek(fd, 2 * sizeof(int), SEEK_SET);
            read(fd, oldScore, sizeof(int));
            printf("Fatima: my current score is: %d\n", oldScore[0]);
        }
        close(fd);
        // Playing the dice and printing its own name and the dice score
        printf("%s: I'm playing my dice\n", name);
        dice = (int)time(NULL) % 10 + 1;
        printf("%s: I got %d points\n\n", name, dice);
        // Updating the old score
        int old = oldScore[0];
        oldScore[0] = old + dice;
        // Writing the new score at the same file offset
        fd = open("sharedFile1.txt", O_WRONLY);
        if (playerId == 1) // Wisal
        {
            lseek(fd, 0, SEEK_SET);
            write(fd, oldScore, sizeof(int));
        }
        else if (playerId == 2) // Salman
        {
            lseek(fd, sizeof(int), SEEK_SET);
            write(fd, oldScore, sizeof(int));
        }
        else // Fatima
        {
            lseek(fd, 2 * sizeof(int), SEEK_SET);
            write(fd, oldScore, sizeof(int));
        }
        close(fd);
        // Sleeping for a second and signaling the referee before pausing
        sleep(1);
        kill(getppid(), SIGUSR1);
    }
}

void checkWinner(int fd, char *name)
{
    int currentScore[1];
    // reading the new totals from sharedFile1.txt
    read(fd, currentScore, sizeof(int));
    // printing player's name and total points so far
    if (strcmp(name, "Wisal") == 0)
        printf("Referee: Wisal's current score: ");
    else if (strcmp(name, "Salman") == 0)
        printf("Referee: Salman's current score: ");
    else
        printf("Referee: Fatima's current score: ");
    printf("%d\n", currentScore[0]);
    sleep(1);
    // checking if there's a winner and terminating all processes in case there is
    if (currentScore[0] >= 50)
    {
        printf("Referee: %s won the game\n", name);
        kill(0, SIGTERM);
    }
}