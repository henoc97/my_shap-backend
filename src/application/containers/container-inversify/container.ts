import { Container } from "inversify";
import { initContainer } from "../main.container"

export class DIContainer {
    private container: Container
    private static instance: DIContainer

    private constructor() {
        this.container = initContainer();
    }

    public static getInstance(): DIContainer {
        if (!DIContainer.instance) {
            DIContainer.instance = new DIContainer();
        }
        return DIContainer.instance;
    }

    public static getContainer() {
        const diContainer = DIContainer.getInstance();
        return diContainer.container;
    }

    // public getContainerSerciveBound() {

    // }
}