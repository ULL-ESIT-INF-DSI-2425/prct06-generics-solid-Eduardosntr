import { User } from "./types.js";
import { SystemAction } from "./types.js";
import { Action } from "./types.js";

/**
 * Singleton class that implements a Logger to track user actions in the system.
 */
export class LoggerInstance implements Iterable<Action> {
  /**
   * List of actions performed in the system.
   */
  private actions: Action[];

  /**
   * Static instance of the Logger (Singleton pattern).
   */
  private static loggerInstance: LoggerInstance;

  /**
   * Private constructor 
   */
  private constructor() {
    this.actions = [];
  }

  /**
   * Creates the single instance of the Logger.
   * If it doesn't exist, it creates one.
   * 
   * @returns The singleton instance of the Logger.
   */
  public static getLoggerInstance(): LoggerInstance {
    if (!LoggerInstance.loggerInstance) {
      LoggerInstance.loggerInstance = new LoggerInstance();
    }
    return LoggerInstance.loggerInstance;
  }

  /**
   * Method that set the actions of the loggerInstance
   * @param actions - Actions to insert
   */
  setItems(actions: Action[]) {
    LoggerInstance.loggerInstance.actions = actions;
  }

  /**
   * Method to get the information of the actions realized by a specific User 
   * @param user - The user to attach
   * @returns The list of actions that the user realized 
   */
  getInformationOf(userToAttach: User): Action[] {
    let listOfActions : Action[] = [] 
    this.actions.forEach((action) => {
      if (userToAttach.id == action.user.id && userToAttach.name == action.user.name) {
        listOfActions.push(action)
      }
    })
    return listOfActions; 
  }

  /**
   * Method to get the information of the users that realized an specific action
   * @param actionToAttach - The action that we want to attach
   * @returns The list of actions 
   */
  getActions(actionToAttach: SystemAction): Action[] {
    let listOfActions: Action[] = []
    this.actions.forEach((action) => {
      if (actionToAttach == action.systemAction) {
        listOfActions.push(action)
      }
    })
    return listOfActions; 
  }

  /**
   * Method to get the actions realized in two diferents moments
   * @param firstDate - First date to attach
   * @param secondDate - Second date to attach
   * @returns The actions realized in the two different dates 
   */
  getDatesInformation(firstDate: Date, secondDate: Date) : Action[] | undefined {
    let listOfActions: Action[] = []
    if (firstDate.getTime() == secondDate.getTime()) {
      return undefined; 
    } 
    this.actions.forEach((action) => {
      if (firstDate.getTime() == action.date.getTime() || secondDate.getTime() == action.date.getTime()) {
        listOfActions.push(action)
      }
    })
    return listOfActions; 
  }

  [Symbol.iterator](): IterableIterator<Action> {
    return this.actions.values(); 
  }
}