package com.software.ssps.Services.Student;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.software.ssps.Entity.Student;
import com.software.ssps.Entity.paymentHistory;

@Service
public class PaymentService {
    public List<paymentHistory> findById(Student currentStudent, List<paymentHistory> paymentHistory) {
        List<paymentHistory> studentPaymentHistory = new ArrayList<>();
        for (paymentHistory History : paymentHistory) {
            if (History.getStudentID().equals(currentStudent.getStudentID()))
                studentPaymentHistory.add(History);
        }
        return studentPaymentHistory;

    }
}

