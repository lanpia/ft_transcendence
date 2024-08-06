Assignment name  : mini_serv
--------------------------------------------------------------------------------
Expected files   : mini_serv.c
--------------------------------------------------------------------------------
Allowed functions: write, close, select, socket, accept, listen, send, recv, bind, strstr, malloc, realloc, free, calloc, bzero, atoi, sprintf, strlen, exit, strcpy, strcat, memset
--------------------------------------------------------------------------------

Write a program that will listen for client to connect on a certain port on 127.0.0.1 and will let clients to speak with each other

This program will take as first argument the port to bind to
If no argument is given, it should write in stderr "Wrong number of arguments" followed by a \n and exit with status 1
If a System Calls returns an error before the program start accepting connection, it should write in stderr "Fatal error" followed by a \n and exit with status 1
If you cant allocate memory it should write in stderr "Fatal error" followed by a \n and exit with status 1

Your program must be non-blocking but client can be lazy and if they don't read your message you must NOT disconnect them...

Your program must not contains #define preproc
Your program must only listen to 127.0.0.1
The fd that you will receive will already be set to make 'recv' or 'send' to block if select hasn't be called before calling them, but will not block otherwise. 

When a client connect to the server:
- the client will be given an id. the first client will receive the id 0 and each new client will received the last client id + 1
- %d will be replace by this number
- a message is sent to all the client that was connected to the server: "server: client %d just arrived\n"

clients must be able to send messages to your program.
- message will only be printable characters, no need to check
- a single message can contains multiple \n
- when the server receive a message, it must resend it to all the other client with "client %d: " before every line!

When a client disconnect from the server:
- a message is sent to all the client that was connected to the server: "server: client %d just left\n"

Memory or fd leaks are forbidden

To help you, you will find the file main.c with the beginning of a server and maybe some useful functions. (Beware this file use forbidden functions or write things that must not be there in your final program)

Warning our tester is expecting that you send the messages as fast as you can. Don't do un-necessary buffer.

Evaluation can be a bit longer than usual...

Hint: you can use nc to test your program
Hint: you should use nc to test your program
Hint: To test you can use fcntl(fd, F_SETFL, O_NONBLOCK) but use select and NEVER check EAGAIN (man 2 send)

---

127.0.0.1의 특정 포트에서 클라이언트가 연결할 수 있도록 대기하고, 클라이언트들끼리 서로 대화할 수 있도록 하는 프로그램을 작성하세요.

이 프로그램은 첫 번째 인수로 바인딩할 포트를 받아야 합니다.
만약 인수가 주어지지 않았다면, stderr에 "Wrong number of arguments"와 \n을 출력하고 상태 코드 1로 종료해야 합니다.
프로그램이 연결을 수락하기 전에 시스템 호출에서 오류가 발생하면, stderr에 "Fatal error"와 \n을 출력하고 상태 코드 1로 종료해야 합니다.
메모리 할당에 실패하면 stderr에 "Fatal error"와 \n을 출력하고 상태 코드 1로 종료해야 합니다.

프로그램은 논블로킹이어야 하지만, 클라이언트가 메시지를 읽지 않더라도 연결을 끊으면 안 됩니다.

프로그램은 #define 전처리기를 포함하지 않아야 합니다.
프로그램은 오직 127.0.0.1에서만 리스닝해야 합니다.
'select'가 호출되지 않은 상태에서 'recv'나 'send'를 호출하면 블로킹되지만, 그렇지 않은 경우에는 블로킹되지 않는 파일 디스크립터를 사용해야 합니다.

클라이언트가 서버에 연결되면:
- 클라이언트에게 ID가 부여됩니다. 첫 번째 클라이언트는 ID 0을 받고, 이후 새 클라이언트는 마지막 클라이언트 ID + 1을 받습니다.
- %d는 이 번호로 대체됩니다.
- 서버에 연결된 모든 클라이언트에게 "server: client %d just arrived\n" 메시지가 전송됩니다.

클라이언트는 프로그램으로 메시지를 보낼 수 있어야 합니다.
- 메시지는 출력 가능한 문자만 포함하며, 확인할 필요는 없습니다.
- 하나의 메시지에 여러 개의 \n이 포함될 수 있습니다.
- 서버가 메시지를 수신하면, 모든 다른 클라이언트에게 "client %d: "를 각 줄 앞에 붙여서 다시 전송해야 합니다.

클라이언트가 서버에서 연결을 끊으면:
- 서버에 연결된 모든 클라이언트에게 "server: client %d just left\n" 메시지가 전송됩니다.

메모리나 파일 디스크립터 누수가 없어야 합니다.

서버의 시작 부분과 몇 가지 유용한 함수가 포함된 main.c 파일을 참고할 수 있습니다. (이 파일에는 금지된 함수가 사용되었거나 최종 프로그램에 포함되어서는 안 되는 내용이 있을 수 있습니다)

주의: 테스트 프로그램은 가능한 한 빠르게 메시지를 전송할 것을 기대하고 있습니다. 불필요한 버퍼링을 하지 마세요.

평가는 평소보다 조금 더 길어질 수 있습니다.

- 힌트: 프로그램을 테스트하기 위해 nc를 사용할 수 있습니다.
- 힌트: 프로그램을 테스트하기 위해 nc를 사용해야 합니다.
- 힌트: 테스트를 위해 fcntl(fd, F_SETFL, O_NONBLOCK)을 사용할 수 있지만, select를 사용하고 EAGAIN을 절대 확인하지 마세요 (man 2 send).

===

gcc -Wall -Wextra -Werror -g -fsanitize=address t.c