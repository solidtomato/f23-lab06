/**
 * Refactor Task 2.
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */

import { FroggerID } from "./froggerid"

class Records {
    private records: FroggerID[]

    constructor() {
        this.records = []
    }

	/**
     * Adds a person's record.
     *
     * @param firstName   first name of the person
     * @param lastName    last name of the person
     * @param phoneNumber phone number of the person
     * @param zipCode     zip code of the person
     * @param state       state of the person
     * @param gender      gender of the person
     * @return Return false if the record has existed. Else, return true.
     */
    public addRecord(id: FroggerID) {
        for (let existingId of this.records) {
            if (existingId.equals(id)) return false
        }
        this.records.push(id)
        return true
    }
}

export { Records }