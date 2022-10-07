package servlet.employee;

import entity.expenseRequest.ExpenseDao;
import entity.expenseRequest.ExpenseDaoFactory;
import entity.expenseRequest.ExpenseRequest;
import entity.user.User;
import entity.user.UserDao;
import entity.user.UserDaoFactory;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

public class EmployeeHomePageServlet extends HttpServlet {
    UserDao userDao = UserDaoFactory.getUserDao();
    ExpenseDao expenseDao = ExpenseDaoFactory.getExpenseDao();

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        HttpSession session = request.getSession(false);
        User currentUser = (User) session.getAttribute("currentUser");

        request.getRequestDispatcher("pageHeader.html").include(request,response);
        out.println("<h2>Welcome, "+currentUser.getName()+"!</h2><hr />");
        out.println("<div class='card-deck'>");
        out.println("<div class='card bg-light'>");
        out.println("<div class='card-body'>");
        out.println("<h4 class='card-title'>Submit Request</h4>");
        out.println("<p class='card-text'>Create New Expense Request!</p>");
        out.println("<a href='employee_expenses_new' class='btn btn-primary stretched-link'>New Expense</a>");
        out.println("</div>");
        out.println("</div>");
        out.println("<div class='card bg-light'>");
        out.println("<div class='card-body'>");
        out.println("<h4 class='card-title'>Update Info</h4>");
        out.println("<p class='card-text'>Update Account Information!</p>");
        out.println("<a href='employee_update' class='btn btn-primary stretched-link'>Update Account</a>");
        out.println("</div>");
        out.println("</div>");
        out.println("<div class='card bg-light'>");
        out.println("<div class='card-body'>");
        out.println("<h4 class='card-title'>Status List</h4>");
        out.println("<p class='card-text'>Current Status of your Requests!</p>");
        out.println("<a href='employee_expenses' class='btn btn-primary stretched-link'>Expense List</a>");
        out.println("</div>");
        out.println("</div>");
        out.println("<div class='card bg-light'>");
        out.println("<div class='card-body'>");
        out.println("<h4 class='card-title'>Logout</h4>");
        out.println("<p class='card-text'>LOGOUT!</p>");
        out.println("<a href='logout' class='btn btn-primary stretched-link'>Logout</a>");
        out.println("</div>");
        out.println("</div>");
        out.println("</div>");

        request.getRequestDispatcher("pageFooter.html").include(request,response);
    }
}