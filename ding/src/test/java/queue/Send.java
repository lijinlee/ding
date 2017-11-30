package queue;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

/**
 * Created by Administrator on 2017/4/19.
 */
public class Send {
    private final static String QUEUE_NAME = "ding_durable";

    public static void main(String[] args) throws IOException, TimeoutException {
        //是否持久化
        boolean durable = false;
        String[] tasks={"task1.","task2..","task3...","task4....","task5.....","task6.....","task7.....","task8....."};
        ConnectionFactory factory = new ConnectionFactory();
        factory.setHost("localhost");
        Connection connection = factory.newConnection();
        Channel channel = connection.createChannel();
        channel.queueDeclare(QUEUE_NAME, durable, false, false, null);
        for(String task:tasks){
            channel.basicPublish("", QUEUE_NAME, null, task.getBytes());
        }
        channel.close();
        connection.close();
    }
}
