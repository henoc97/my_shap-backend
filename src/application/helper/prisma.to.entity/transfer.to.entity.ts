import { Transfer } from "../../../domain/entities/transfer.entity";


export function toTransferEntity(dto: any): Transfer {
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
