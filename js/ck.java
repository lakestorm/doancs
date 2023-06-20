//ChatPanel
package chatBox;

import javax.swing.JPanel;
import java.awt.BorderLayout;
import javax.swing.border.TitledBorder;
import java.awt.GridLayout;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.Socket;

import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JButton;
import java.io.*;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class ChatPanel extends JPanel {
	
	Socket socket = null;
	BufferedReader bf = null;
	DataOutputStream os = null;
	OutputThread t = null;
	String sender;
	String receiver;
	JTextArea txtMessages;
	
	public ChatPanel(Socket s, String sender, String receiver) {
		setLayout(new BorderLayout(0, 0));
		
		JPanel panel = new JPanel();
		panel.setBorder(new TitledBorder(null, "Message", TitledBorder.LEADING, TitledBorder.TOP, null, null));
		add(panel, BorderLayout.SOUTH);
		panel.setLayout(new GridLayout(1, 2, 0, 0));
		
		JScrollPane scrollPane = new JScrollPane();
		panel.add(scrollPane);
		
		JTextArea txtMessage = new JTextArea();
		scrollPane.setViewportView(txtMessage);
		
		JButton btnSend = new JButton("Send");
		btnSend.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				if (txtMessage.getText().trim().length() == 0) return;
				try {
					os.writeBytes(txtMessage.getText());
					os.write(13); os.write(10);
					os.flush();
					txtMessages.append("\n"+sender+": "+txtMessage.getText());
					txtMessage.setText("");
				}
				catch(Exception ex) {
					ex.printStackTrace();
				}
			}
		});
		panel.add(btnSend);
		
		JScrollPane scrollPane_1 = new JScrollPane();
		add(scrollPane_1, BorderLayout.CENTER);
		
		txtMessages = new JTextArea();
		scrollPane_1.setViewportView(txtMessages);
		
		socket = s;
		this.sender = sender;
		this.receiver = receiver;
		try {
			bf = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			os = new DataOutputStream(socket.getOutputStream());
			t = new OutputThread(s, txtMessages, sender, receiver);
			t.start();
		}
		catch(Exception e) {
		}
	}
	public JTextArea getTxtMessages() {
		return this.txtMessages;
	}
	public void closeConnection() {
		try {
			if (socket != null) {
				socket.close();
			}
		} catch (IOException ex) {
			ex.printStackTrace();
		}
	}
}

//ClientChatter
package chatBox;

import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import java.awt.BorderLayout;
import javax.swing.border.TitledBorder;
import java.awt.GridLayout;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.Socket;

import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.JButton;
import javax.swing.SwingConstants;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class ClientChatter extends JFrame {

	private JPanel contentPane;
	private JTextField txtStaff;
	private JTextField txtServerIP;
	private JTextField txtServerPort;
	Socket mngSocket = null;
	String mngIP = "";
	int mngPort = 0;
	String staffName = "";
	BufferedReader bf = null;
	DataOutputStream os = null;
	OutputThread t = null;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					ClientChatter frame = new ClientChatter();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	
	public ClientChatter() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 200, 650, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));

		setContentPane(contentPane);
		contentPane.setLayout(new BorderLayout(0, 0));
		
		JPanel panel = new JPanel();
		panel.setBorder(new TitledBorder(null, "Staff and sever info.", TitledBorder.LEADING, TitledBorder.TOP, null, null));
		contentPane.add(panel, BorderLayout.NORTH);
		panel.setLayout(new GridLayout(1, 7, 0, 0));
		
		JLabel lblNewLabel = new JLabel("StaffName:  ");
		lblNewLabel.setHorizontalAlignment(SwingConstants.RIGHT);
		panel.add(lblNewLabel);
		
		txtStaff = new JTextField();
		panel.add(txtStaff);
		txtStaff.setColumns(10);
		
		
		JLabel lblNewLabel_1 = new JLabel("Mng IP:   ");
		lblNewLabel_1.setHorizontalAlignment(SwingConstants.RIGHT);
		panel.add(lblNewLabel_1);
		
		txtServerIP = new JTextField();
		txtServerIP.setText("localhost");
		panel.add(txtServerIP);
		txtServerIP.setColumns(10);
		
		JLabel lblNewLabel_2 = new JLabel("Port:   ");
		lblNewLabel_2.setHorizontalAlignment(SwingConstants.RIGHT);
		panel.add(lblNewLabel_2);
		
		txtServerPort = new JTextField();
		panel.add(txtServerPort);
		txtServerPort.setColumns(10);
		
		JFrame thisFrame = this;
		
		JButton btnConnect = new JButton("Connect");
		btnConnect.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				mngIP = txtServerIP.getText();
				mngPort = Integer.parseInt(txtServerPort.getText());
				staffName = txtStaff.getText();
				try {
					mngSocket = new Socket(mngIP, mngPort);
					if  (mngSocket  != null)  {
						ChatPanel p = new ChatPanel(mngSocket, staffName, "Manager");
						thisFrame.getContentPane().add(p);
						p.getTxtMessages().append("Manager is running");
						p.updateUI();
						
						bf = new BufferedReader(new InputStreamReader(mngSocket.getInputStream()));
						os = new DataOutputStream(mngSocket.getOutputStream());
						
						os.writeBytes("Staff: "+staffName);
						os.write(13); os.write(10);
						os.flush();
						
					}
				}
				catch(Exception ex) {
				}
			}
		});
		panel.add(btnConnect);
	}

}
package chatBox;

import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;

import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.SwingConstants;
import javax.swing.JTabbedPane;

public class ManagerChatter extends JFrame implements Runnable{

	private JPanel contentPane;
	private JTextField txtServerPort;
	
	ServerSocket srvSocket = null;
	BufferedReader bf = null;
	Thread t;
	JTabbedPane tabbedPane;
	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					ManagerChatter frame = new ManagerChatter();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public ManagerChatter() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(800, 200, 450, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));

		setContentPane(contentPane);
		contentPane.setLayout(new BorderLayout(0, 0));
		
		JPanel panel = new JPanel();
		contentPane.add(panel, BorderLayout.NORTH);
		panel.setLayout(new GridLayout(1, 2, 0, 0));
		
		JLabel lblNewLabel = new JLabel("ManagerPort: ");
		lblNewLabel.setHorizontalAlignment(SwingConstants.RIGHT);
		panel.add(lblNewLabel);
		
		txtServerPort = new JTextField();
		txtServerPort.setText("12340");
		panel.add(txtServerPort);
		txtServerPort.setColumns(10);
		
		tabbedPane = new JTabbedPane(JTabbedPane.TOP);
		contentPane.add(tabbedPane, BorderLayout.CENTER);
		
		this.setSize(650, 300);
		int serverPort = Integer.parseInt(txtServerPort.getText());
		try {
			srvSocket = new ServerSocket(serverPort);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		t = new Thread(this);
		t.start();
	}
	
	public void run() {
		while(true) {
			try  {
				Socket aStaffSocket = srvSocket.accept();
				if(aStaffSocket != null) {
					bf = new BufferedReader(new InputStreamReader(aStaffSocket.getInputStream()));
					String S = bf.readLine();
					int pos = S.indexOf(":");
					String staffName = S.substring(pos+1);
					ChatPanel p = new ChatPanel(aStaffSocket, "Manager", staffName);
					tabbedPane.add(staffName, p);
					p.updateUI();
				}
				Thread.sleep(100);
			}
			catch(Exception e) {
				e.printStackTrace();
			}
		}
	}
}
package chatBox;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.Socket;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.swing.JTextArea;

public class OutputThread extends Thread {
    private Socket socket;
    private JTextArea txt;
    private BufferedReader bf;
    private String sender;
    private String receiver;
    private Connection connection;
    private String url = "jdbc:mysql://localhost:3306/chatbox";
    private String username = "root";
    private String password = "qhoang";

    public OutputThread(Socket socket, JTextArea txt, String sender, String receiver) {
        super();
        this.socket = socket;
        this.txt = txt;
        this.sender = sender;
        this.receiver = receiver;
        try {
            bf = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            connection = DriverManager.getConnection(url, username, password);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void run() {
        while (true) {
            try {
                if (socket != null) {
                    String msg = "";
                    if ((msg = bf.readLine()) != null && msg.length() > 0) {
                        saveChatHistory(sender, receiver, msg);
                        txt.append("\n" + receiver + ": " + msg);
                    }
                    sleep(1000);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    public void saveChatHistory(String sender, String receiver, String message) {
        try {
            String sql = "INSERT INTO chat_history (sender, receiver, message, timestamp) VALUES (?, ?, ?, ?)";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setString(1, sender);
            statement.setString(2, receiver);
            statement.setString(3, message);
            statement.setString(4, getCurrentTimestamp());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public String getCurrentTimestamp() {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        return dateFormat.format(date);
    }
}
