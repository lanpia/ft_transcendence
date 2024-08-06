#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>
#include <string.h>
#include <stdbool.h>

#include <sys/select.h>
#include <sys/socket.h>
#include <arpa/inet.h>

#define MAX_SIZE 65536

typedef struct s_client{
	int fd[MAX_SIZE];
	int client_num;
} t_c;

typedef struct s_server{
	int port;
	int fd;
	struct sockaddr_in addr;
	socklen_t	len;
} t_s;

void	exit_error(bool condition, const char *msg, int exit_code)
{
	char	buf[MAX_SIZE];

	if (condition) {
		sprintf(buf, "%s\n", msg);
		exit(exit_code);
	}
}

socklen_t	init_server(t_s *server, t_c *client, char *cport)
{
	char	buf[MAX_SIZE];

	exit_error(atoi(cport) < 0, "Fatal error", 1);
	server->port = atoi(cport);
	server->fd = socket(AF_INET, SOCK_STREAM, 0);
	exit_error(server->fd == -1, "Fatal error", 1);

	server->addr.sin_family = AF_INET;
	server->addr.sin_addr.s_addr = htonl(2130706433);
	server->addr.sin_port = htons(server->port);

	exit_error(bind(server->fd, (struct sockaddr *)&server->addr, sizeof(server->addr)) == -1, "bind() failed", 1);
	exit_error(listen(server->fd, 3) == -1, "Fatal error", 1);
	sprintf(buf, "Server open on port %d\n", server->port);
	for (int i = 0; i < MAX_SIZE; i++)
		client->fd[i] = -1;
	return (sizeof(server->addr));
}

void	modify_client(t_c *client, bool add, int fd)
{
	char	buf[MAX_SIZE];
	int i = 0;
	if (add)
	{
		while (i < MAX_SIZE && client->fd[i] != -1)
			i++;
		exit_error(i == MAX_SIZE, "Too many clients", 1);
		client->fd[i] = fd;
		sprintf(buf, "server: client %d just arrived\n", i);
	}
	else
	{
		while (i < MAX_SIZE && client->fd[i] != fd)
			i++;
		exit_error(i == MAX_SIZE, "Client not found", 1);
		client->fd[i] = -1;
		sprintf(buf, "server: client %d just left\n", i);
	}
}

char	*get_msg(int fd, t_c *client)
{
	char buf[MAX_SIZE];
	char *msg;
	int readbyte;

	readbyte = recv(fd, buf, MAX_SIZE, 0);
	exit_error(readbyte == -1, "Fatal error", 1);
	modify_client(client, readbyte == 0, fd);
	buf[readbyte] = '\0';
	msg = buf;
	return (msg);
}

void	broadcast(t_c *client, char *msg, int fd)
{
	for (int i = 0; i < MAX_SIZE; i++)
	{
		if (client->fd[i] != -1 && client->fd[i] != fd)
			send(client->fd[i], msg, strlen(msg), 0);
	}
}

int main(int ac, char **av)
{
	t_s		server;
	t_c		client;
	char	*msg;
	int		newfd;

	exit_error(ac != 2, "Wrong number of arguments", 1);
	server.len = init_server(&server, &client, av[1]);
	while (true)
	{
		newfd = accept(server.fd, (struct sockaddr *)&server.addr, &server.len);
		
		client.client_num++;
		modify_client(&client, newfd != -1, newfd);
		msg = get_msg(newfd, &client);
		broadcast(&client, msg, newfd);
	}
	fcntl(newfd, F_SETFL, O_NONBLOCK);
}