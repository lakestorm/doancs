// LoginClient.java

package chatBox;

import java.awt.EventQueue;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;
import javax.swing.SwingConstants;
import javax.swing.border.EmptyBorder;

public class LoginClient extends JFrame {

    private JPanel contentPane;
    private JTextField txtAccount;
    private JPasswordField passwordField;

    public static void main(String[] args) {
        EventQueue.invokeLater(new Runnable() {
            public void run() {
                try {
                    LoginClient frame = new LoginClient();
                    frame.setVisible(true);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
    }

    public LoginClient() {
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setBounds(100, 200, 300, 200);
        contentPane = new JPanel();
        contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
        setContentPane(contentPane);
        contentPane.setLayout(new GridLayout(3, 2, 5, 5));

        JLabel lblAccount = new JLabel("Account:");
        lblAccount.setHorizontalAlignment(SwingConstants.RIGHT);
        contentPane.add(lblAccount);

        txtAccount = new JTextField();
        contentPane.add(txtAccount);
        txtAccount.setColumns(10);

        JLabel lblPassword = new JLabel("Password:");
        lblPassword.setHorizontalAlignment(SwingConstants.RIGHT);
        contentPane.add(lblPassword);

        passwordField = new JPasswordField();
        contentPane.add(passwordField);

        JButton btnLogin = new JButton("Login");
        btnLogin.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String account = txtAccount.getText();
                String password = new String(passwordField.getPassword());
                dispose();
                ClientChatter clientChatter = new ClientChatter(account, password);
                clientChatter.setVisible(true);
            }
        });
        contentPane.add(btnLogin);
    }
}


// LoginManager.java

package chatBox;

import java.awt.EventQueue;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;
import javax.swing.SwingConstants;
import javax.swing.border.EmptyBorder;

public class LoginManager extends JFrame {

    private JPanel contentPane;
    private JTextField txtAccount;
    private JPasswordField passwordField;

    public static void main(String[] args) {
        EventQueue.invokeLater(new Runnable() {
            public void run() {
                try {
                    LoginManager frame = new LoginManager();
                    frame.setVisible(true);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
    }

    public LoginManager() {
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setBounds(100, 200, 300, 200);
        contentPane = new JPanel();
        contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
        setContentPane(contentPane);
        contentPane.setLayout(new GridLayout(3, 2, 5, 5));

        JLabel lblAccount = new JLabel("Account:");
        lblAccount.setHorizontalAlignment(SwingConstants.RIGHT);
        contentPane.add(lblAccount);

        txtAccount = new JTextField();
        contentPane.add(txtAccount);
        txtAccount.setColumns(10);

        JLabel lblPassword = new JLabel("Password:");
        lblPassword.setHorizontalAlignment(SwingConstants.RIGHT);
        contentPane.add(lblPassword);

        passwordField = new JPasswordField();
        contentPane.add(passwordField);

        JButton btnLogin = new JButton("Login");
        btnLogin.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String account = txtAccount.getText();
                String password = new String(passwordField.getPassword());
                dispose();
                ManagerChatter managerChatter = new ManagerChatter(account, password);
                managerChatter.setVisible(true);
            }
        });
        contentPane.add(btnLogin);
    }
}


// ClientChatter.java

package chatBox;

import java.awt.BorderLayout;
import java.awt.EventQueue;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.Socket;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;
import javax.swing.JTextField;
import javax.swing.SwingUtilities;
import javax.swing.border.EmptyBorder;

public class ClientChatter extends JFrame implements Runnable {

    private JPanel contentPane;
    private JTextField txtServerIP;
    private JTextField txtServerPort;

    private String account;
    private String password;

    private Socket mngSocket = null;
    private BufferedReader bf = null;
    private DataOutputStream os = null;
    private OutputThread t = null;
    private JTabbedPane tabbedPane;

    private Connection connection;
    private String dbURL = "jdbc:mysql://localhost:3306/chat_history";
    private String dbUsername = "root";
    private String dbPassword = "password";

    public static void main(String[] args) {
        EventQueue.invokeLater(new Runnable() {
            public void run() {
                try {
                    LoginClient loginClient = new LoginClient();
                    loginClient.setVisible(true);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
    }

    public ClientChatter(String account, String password) {
        this.account = account;
        this.password = password;

        try {
            connection = DriverManager.getConnection(dbURL, dbUsername, dbPassword);
            String createTableQuery = "CREATE TABLE IF NOT EXISTS chat_history ("
                    + "id INT AUTO_INCREMENT PRIMARY KEY,"
                    + "sender VARCHAR(255),"
                    + "receiver VARCHAR(255),"
                    + "message VARCHAR(255),"
                    + "timestamp DATETIME)";
            PreparedStatement createTableStatement = connection.prepareStatement(createTableQuery);
            createTableStatement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }

        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setBounds(800, 200, 450, 300);
        contentPane = new JPanel();
        contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
        setContentPane(contentPane);
        contentPane.setLayout(new BorderLayout(0, 0));

        JPanel panel = new JPanel();
        contentPane.add(panel, BorderLayout.NORTH);

        txtServerIP = new JTextField();
        txtServerIP.setText("localhost");
        panel.add(txtServerIP);
        txtServerIP.setColumns(10);

        txtServerPort = new JTextField();
        txtServerPort.setText("12340");
        panel.add(txtServerPort);
        txtServerPort.setColumns(10);

        JButton btnConnect = new JButton("Connect");
        btnConnect.addActionListener(e -> {
            String serverIP = txtServerIP.getText();
            int serverPort = Integer.parseInt(txtServerPort.getText());
            connectToServer(serverIP, serverPort);
        });
        panel.add(btnConnect);

        tabbedPane = new JTabbedPane(JTabbedPane.TOP);
        contentPane.add(tabbedPane, BorderLayout.CENTER);
    }

    private void connectToServer(String serverIP, int serverPort) {
        try {
            mngSocket = new Socket(serverIP, serverPort);
            bf = new BufferedReader(new InputStreamReader(mngSocket.getInputStream()));
            os = new DataOutputStream(mngSocket.getOutputStream());

            os.writeBytes(account + "\n");
            os.writeBytes(password + "\n");
            os.flush();

            String response = bf.readLine();
            if (response.equals("OK")) {
                t = new OutputThread(mngSocket, getActiveChatPanel().getTxtChat(), account, "Manager");
                t.start();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private ChatPanel getActiveChatPanel() {
        int selectedIndex = tabbedPane.getSelectedIndex();
        return (ChatPanel) tabbedPane.getComponentAt(selectedIndex);
    }

    public void run() {
        while (true) {
            try {
                String receivedMessage = bf.readLine();
                if (receivedMessage != null) {
                    String[] messageParts = receivedMessage.split(":");
                    String sender = messageParts[0];
                    String message = messageParts[1];

                    ChatPanel activeChatPanel = getActiveChatPanel();
                    if (activeChatPanel != null) {
                        activeChatPanel.appendMessage(sender, message);
                    }

                    saveChatHistory(sender, account, message);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    private void saveChatHistory(String sender, String receiver, String message) {
        try {
            String insertQuery = "INSERT INTO chat_history (sender, receiver, message, timestamp) VALUES (?, ?, ?, ?)";
            PreparedStatement insertStatement = connection.prepareStatement(insertQuery);
            insertStatement.setString(1, sender);
            insertStatement.setString(2, receiver);
            insertStatement.setString(3, message);
            insertStatement.setString(4, getFormattedTimestamp());
            insertStatement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private String getFormattedTimestamp() {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return now.format(formatter);
    }
}


// ManagerChatter.java

package chatBox;

import java.awt.BorderLayout;
import java.awt.EventQueue;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;
import javax.swing.JTextField;
import javax.swing.SwingUtilities;
import javax.swing.border.EmptyBorder;

public class ManagerChatter extends JFrame implements Runnable {

    private JPanel contentPane;
    private JTextField txtServerPort;

    private String account;
    private String password;

    private ServerSocket srvSocket = null;
    private Socket clientSocket = null;
    private BufferedReader bf = null;
    private DataOutputStream os = null;
    private OutputThread t = null;
    private JTabbedPane tabbedPane;

    private Connection connection;
    private String dbURL = "jdbc:mysql://localhost:3306/chat_history";
    private String dbUsername = "root";
    private String dbPassword = "password";

    public static void main(String[] args) {
        EventQueue.invokeLater(new Runnable() {
            public void run() {
                try {
                    LoginManager loginManager = new LoginManager();
                    loginManager.setVisible(true);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
    }

    public ManagerChatter(String account, String password) {
        this.account = account;
        this.password = password;

        try {
            connection = DriverManager.getConnection(dbURL, dbUsername, dbPassword);
            String createTableQuery = "CREATE TABLE IF NOT EXISTS chat_history ("
                    + "id INT AUTO_INCREMENT PRIMARY KEY,"
                    + "sender VARCHAR(255),"
                    + "receiver VARCHAR(255),"
                    + "message VARCHAR(255),"
                    + "timestamp DATETIME)";
            PreparedStatement createTableStatement = connection.prepareStatement(createTableQuery);
            createTableStatement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }

        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setBounds(100, 200, 450, 300);
        contentPane = new JPanel();
        contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
        setContentPane(contentPane);
        contentPane.setLayout(new BorderLayout(0, 0));

        JPanel panel = new JPanel();
        contentPane.add(panel, BorderLayout.NORTH);

        txtServerPort = new JTextField();
        txtServerPort.setText("12340");
        panel.add(txtServerPort);
        txtServerPort.setColumns(10);

        tabbedPane = new JTabbedPane(JTabbedPane.TOP);
        contentPane.add(tabbedPane, BorderLayout.CENTER);

        try {
            srvSocket = new ServerSocket(12340);
            clientSocket = srvSocket.accept();
            bf = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
            os = new DataOutputStream(clientSocket.getOutputStream());

            String receivedAccount = bf.readLine();
            String receivedPassword = bf.readLine();

            if (receivedAccount.equals(account) && receivedPassword.equals(password)) {
                os.writeBytes("OK\n");
                os.flush();

                t = new OutputThread(clientSocket, getActiveChatPanel().getTxtChat(), account, "Client");
                t.start();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private ChatPanel getActiveChatPanel() {
        int selectedIndex = tabbedPane.getSelectedIndex();
        return (ChatPanel) tabbedPane.getComponentAt(selectedIndex);
    }

    public void run() {
        while (true) {
            try {
                String receivedMessage = bf.readLine();
                if (receivedMessage != null) {
                    String[] messageParts = receivedMessage.split(":");
                    String sender = messageParts[0];
                    String message = messageParts[1];

                    ChatPanel activeChatPanel = getActiveChatPanel();
                    if (activeChatPanel != null) {
                        activeChatPanel.appendMessage(sender, message);
                    }

                    saveChatHistory(sender, account, message);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    private void saveChatHistory(String sender, String receiver, String message) {
        try {
            String insertQuery = "INSERT INTO chat_history (sender, receiver, message, timestamp) VALUES (?, ?, ?, ?)";
            PreparedStatement insertStatement = connection.prepareStatement(insertQuery);
            insertStatement.setString(1, sender);
            insertStatement.setString(2, receiver);
            insertStatement.setString(3, message);
            insertStatement.setString(4, getFormattedTimestamp());
            insertStatement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private String getFormattedTimestamp() {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return now.format(formatter);
    }
}


// ChatPanel.java

package chatBox;

import java.awt.BorderLayout;

import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class ChatPanel extends JPanel {

    private JTextArea txtChat;
    private JTextField txtMessage;

    public JTextArea getTxtChat() {
        return txtChat;
    }

    public ChatPanel() {
        setLayout(new BorderLayout(0, 0));

        txtChat = new JTextArea();
        txtChat.setEditable(false);
        JScrollPane scrollPane = new JScrollPane(txtChat);
        add(scrollPane, BorderLayout.CENTER);

        txtMessage = new JTextField();
        add(txtMessage, BorderLayout.SOUTH);
        txtMessage.setColumns(10);
    }

    public void appendMessage(String sender, String message) {
        txtChat.append(sender + ": " + message + "\n");
    }
}


// OutputThread.java

package chatBox;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

import javax.swing.JTextArea;

public class OutputThread extends Thread {

    private Socket socket;
    private JTextArea txtChat;
    private String sender;
    private String receiver;

    public OutputThread(Socket socket, JTextArea txtChat, String sender, String receiver) {
        this.socket = socket;
        this.txtChat = txtChat;
        this.sender = sender;
        this.receiver = receiver;
    }

    public void run() {
        try {
            BufferedReader bf = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            DataOutputStream os = new DataOutputStream(socket.getOutputStream());

            while (true) {
                String message = bf.readLine();
                if (message != null) {
                    txtChat.append(receiver + ": " + message + "\n");
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
