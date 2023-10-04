import { Road } from "./road"
import { FroggerID } from "./froggerid"
import { Records } from "./record"

/**
 * Refactor Task 1, 2: Frogger
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22), Duan Liang (F23)
 */
class Frogger {

  // Field for Task 1.
	private road: Road
  private position: number

  // Field for Task 2. Anything to add?
  private records: Records
  private id: FroggerID
  
  constructor(road: Road, position: number, records: Records, firstName: string, 
    lastName: string, phoneNumber: string, zipCode: string, state: string, gender: string) {
      this.road = road;
      this.position = position;
      this.records = records;
      this.id = new FroggerID(firstName, lastName, phoneNumber, zipCode, state, gender)
  }

	/**
   * Moves Frogger.
   * @param forward true is move forward, else false.
   * @return true if move successful, else false.
   */
  public move(forward: boolean): boolean {
      let nextPosition: number = this.position + (forward ? 1 : -1);
      if (!this.road.isValid(nextPosition) || this.road.isOccupied(nextPosition)) {
          return false
      }
      this.position = nextPosition;
      return true
  }

  /**
   * Records Frogger to the list of records.
   * 
   * @returns true if record successful, else false.
   */
  public recordMyself(): boolean {
    return this.records.addRecord(this.id)
  }
}