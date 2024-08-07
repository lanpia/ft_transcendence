all:
	@mkdir -p /workspaces/ft_transcendence/_data
	@docker-compose up --build -d

clean :
	-@docker stop $$(docker ps -aq)
	-@docker rm $$(docker ps -aq)

fclean : clean
	-@docker rmi $$(docker images -aq)
	-@docker volume rm $$(docker volume ls -q)
	-@docker-compose down
	-@docker image prune -af
	-@docker network prune -f
	-@docker network rm $$(docker network ls -q)
	-@rm -rf /workspaces/ft_transcendence/_data

re : clean all

.PHONY: all clean fclean re