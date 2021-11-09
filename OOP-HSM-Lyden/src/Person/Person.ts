import { Gender } from "./Gender";

export abstract class Person {
    protected name: string;
    protected age: number;
    protected gender: Gender;
    constructor(name: string, age: number, gender: Gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}