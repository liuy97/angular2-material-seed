export interface BreakPoint {
    mediaQuery: string;
    overlapping: boolean;
    suffix: string;
    alias: string;
}
/**
 * Registry of 1..n MediaQuery breakpoint ranges
 * This is published as a provider and may be overriden from custom, application-specific ranges
 *
 */
export declare class BreakPoints {
    registry: BreakPoint[];
    /**
     *
     */
    constructor();
    /**
     * Search breakpoints by alias (e.g. gt-xs)
     */
    findByAlias(alias: string): BreakPoint;
    findByQuery(query: string): BreakPoint;
    /**
     * Get all the breakpoints whose ranges could overlapping `normal` ranges;
     * e.g. gt-sm overlaps md, lg, and xl
     */
    readonly overlappings: BreakPoint[];
    /**
     * Get list of all registered (non-empty) breakpoint aliases
     */
    readonly aliases: string[];
    /**
     *
     */
    readonly suffixes: string[];
}
