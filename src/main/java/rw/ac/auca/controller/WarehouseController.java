package rw.ac.auca.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import rw.ac.auca.warehouse.domain.Warehouse;
import rw.ac.auca.warehouse.repository.WarehouseRepository;

import java.util.UUID;

@Controller("warehouseWebController")
@RequestMapping("/warehouse")
@RequiredArgsConstructor
public class WarehouseController {

    private final WarehouseRepository warehouseRepository;

    @GetMapping("/registration-page")
    public String getWarehouseRegistrationPage(Model model) {
        model.addAttribute("warehouse", new Warehouse());
        return "warehouse-registration";
    }

    @PostMapping("/create")
    public String registerWarehouseInformation(@ModelAttribute("warehouse") Warehouse warehouse, Model model) {
        try {
            if (warehouse.getId() != null) {
                Warehouse existing = warehouseRepository.findById(warehouse.getId()).orElse(null);
                if (existing != null) {
                    existing.setWarehouseCode(warehouse.getWarehouseCode().trim().toUpperCase());
                    existing.setWarehouseName(warehouse.getWarehouseName().trim());
                    existing.setLocation(warehouse.getLocation().trim());
                    existing.setCapacity(warehouse.getCapacity());
                    existing.setContactEmail(warehouse.getContactEmail());
                    warehouseRepository.save(existing);
                }
            } else {
                warehouse.setWarehouseCode(warehouse.getWarehouseCode().trim().toUpperCase());
                warehouseRepository.save(warehouse);
            }
            return "redirect:/warehouse/list";
        } catch (Exception e) {
            model.addAttribute("error", "Error saving warehouse: " + e.getMessage());
            return "warehouse-registration";
        }
    }

    @GetMapping("/list")
    public String listWarehouses(Model model) {
        model.addAttribute("warehouses", warehouseRepository.findAll());
        return "warehouse-list";
    }

    @PostMapping("/update-page")
    public String updateWarehousePage(@RequestParam(name = "id") UUID id, Model model) {
        Warehouse found = warehouseRepository.findById(id).orElse(new Warehouse());
        model.addAttribute("warehouse", found);
        return "warehouse-registration";
    }

    @PostMapping("/delete")
    public String deleteWarehouse(@RequestParam(name = "id") UUID id, Model model) {
        try {
            warehouseRepository.deleteById(id);
            return "redirect:/warehouse/list";
        } catch (Exception e) {
            model.addAttribute("error", "Cannot delete warehouse: " + e.getMessage());
            return "error-page";
        }
    }
}