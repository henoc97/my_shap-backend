import { TransferDTO } from "../../../presentation/dtos/transfer.dto";
import TYPES from "../../containers/types/types";
import { toTransferEntity } from "../../helper/to.entity/transfer.to.entity";
import { TransferService } from "../../services/transfer.service";
import { inject, injectable } from "inversify";
import { UserService } from "../../services/user.service";
import { sendOtpWithTwilio } from "../../../infrastructure/external-services/twilio/send-otp";
import { Transfer } from "../../../domain/entities/transfer.entity";
import { generateTransferCode } from "../../helper/functions/transfer-uniq-code";

@injectable()
export class CreateTransferUseCase {
    constructor(@inject(TYPES.UserService) private userService: UserService,
        @inject(TYPES.TransferService) private transferService: TransferService) { }

    /**
     * Executes the use case to create a new transfer.
     * @param transferDto - The DTO containing transfer data.
     * @returns The created transfer.
     */
    async execute(transferDto: TransferDTO) {
        const transfer: Transfer = toTransferEntity(transferDto);
        if (transfer.isNonUser) {
            const code = generateTransferCode();
            transfer.code = code;
        }
        return this.transferService.createTransfer(transfer);
    }
}
