/**
 * Type user that defines a User an a id
 */
export type User = {
  /**
   * Unique id of the user
   */
  id: number;
  /**
   * Name of the user
   */
  name: string;
};

/**
 * Enum that defines the available system actions
 */
export enum SystemAction {
  CREATE = "CREATE",
  READ = "READ",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT"
}

/**
 * Type that defines an Action 
 */
export type Action = {
  /**
   * User of the action
   */
  user: User;
  /**
   * System action that a User realized
   */
  systemAction: SystemAction;
  /**
   * The date of that action
   */
  date: Date; 
}
