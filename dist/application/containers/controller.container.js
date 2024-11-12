"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_container_1 = require("./repositories.container");
const agent_controller_1 = require("../../presentation/controllers/agent.controller");
const admin_controller_1 = require("../../presentation/controllers/admin.controller");
const user_controller_1 = require("../../presentation/controllers/user.controller");
const transaction_controller_1 = require("../../presentation/controllers/transaction.controller");
const notification_controller_1 = require("../../presentation/controllers/notification.controller");
const transfer_controller_1 = require("../../presentation/controllers/transfer.controller");
const fee_controller_1 = require("../../presentation/controllers/fee.controller");
// Enregistrement des contrôleurs dans le conteneur
repositories_container_1.container.bind(agent_controller_1.AgentController).toSelf();
repositories_container_1.container.bind(admin_controller_1.AdminController).toSelf();
repositories_container_1.container.bind(user_controller_1.UserController).toSelf();
repositories_container_1.container.bind(transaction_controller_1.TransactionController).toSelf();
repositories_container_1.container.bind(notification_controller_1.NotificationController).toSelf();
repositories_container_1.container.bind(transfer_controller_1.TransferController).toSelf();
repositories_container_1.container.bind(fee_controller_1.FeeController).toSelf();
