package rw.ac.auca.movement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rw.ac.auca.movement.domain.MovementType;
import rw.ac.auca.movement.domain.StockMovement;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface StockMovementRepository extends JpaRepository<StockMovement, UUID> {

    Optional<StockMovement> findByReferenceCode(String referenceCode);

    List<StockMovement> findByProductIdOrderByMovementDateDesc(UUID productId);

    List<StockMovement> findByWarehouseIdOrderByMovementDateDesc(UUID warehouseId);

    List<StockMovement> findByMovementType(MovementType movementType);

    List<StockMovement> findAllByOrderByMovementDateDesc();
}
