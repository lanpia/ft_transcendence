CC = gcc
CFLAGE = -Wall -Wextra -Werror -g -fsanitize=address
NAME = a.out
SRC = mini_serv.c
OBJS = $(SRC:.c=.o)

all: $(NAME)

$(NAME) : $(OBJS)
	$(CC) $(CFLAGE) $(OBJS) -o $(NAME)

clean:
	rm -f $(OBJS)

fclean: clean
	rm -f $(NAME)

re: fclean all
