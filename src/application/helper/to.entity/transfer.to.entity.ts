import { Transfer } from "../../../domain/entities/transfer.entity";
import { TransferDTO } from "../../../presentation/dtos/transfer.dto";


export function toTransferEntity(dto: TransferDTO): Transfer {
    return new Transfer(
        dto.id,
        dto.amount,
        dto.senderId,
        dto.receiverId,
        dto.agentId,
        dto.contact,
        dto.countryCode,
        dto.feeId,
        dto.expiresAt,
        dto.status,
        dto.isNonUser,
    );
}
