package rw.ac.auca.common.exception;

public class WarehouseCapacityExceededException extends BusinessRuleException {
    public WarehouseCapacityExceededException(String message) {
        super(message);
    }
}
