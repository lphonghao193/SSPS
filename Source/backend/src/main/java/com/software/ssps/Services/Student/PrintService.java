package com.software.ssps.Services.Student;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.software.ssps.Entity.Student;
import com.software.ssps.Entity.printHistory;

@Service
public class PrintService {
    public List<printHistory> findById(Student currentStudent, List<printHistory> printHistory){
        List<printHistory> studentPrintHistory = new ArrayList<>();
        for(printHistory History: printHistory){
            if (History.getStudentID().equals(currentStudent.getStudentID()))
                studentPrintHistory.add(History);
        }
        return studentPrintHistory;
    }

}
