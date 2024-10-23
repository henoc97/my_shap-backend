import { Transfer } from "../../../domain/entities/transfer.entity";
import { TransferDTO } from "../../../presentation/dtos/transfer.dto";


export function toTransferDTO(entity: Transfer): TransferDTO {
    return new TransferDTO(
        entity.id,
        entity.amount,
        entity.senderId,
        entity.receiverId,
        entity.createdAt,
        entity.status,
        entity.isNonUser
    );
}
