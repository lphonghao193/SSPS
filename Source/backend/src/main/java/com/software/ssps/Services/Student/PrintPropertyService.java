package com.software.ssps.Services.Student;

import org.springframework.stereotype.Service;

import com.software.ssps.Entity.printProperties;

@Service
public class PrintPropertyService {
    public Integer getCost(printProperties print) {
        // Default cost for A4
        Integer costPerPage = 1;
        // Adjust cost based on page size
        switch (print.getPageType()) {
            case A3:
                costPerPage = 2;
                break;
            case A2:
                costPerPage = 4;
                break;
            case A1:
                costPerPage = 8;
                break;
            default:
                costPerPage = 1;
                break;
        }

        Integer totalCost = costPerPage * print.getPageToPrint().size() * print.getNumberOfCopy();
        return totalCost;
    }
}
