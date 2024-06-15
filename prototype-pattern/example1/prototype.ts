export interface Prototype {
    operation(): void;
    clone(): Prototype;
}