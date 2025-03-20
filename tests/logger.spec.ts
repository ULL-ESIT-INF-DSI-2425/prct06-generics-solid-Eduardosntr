import { describe, it, expect } from 'vitest';
import { LoggerInstance } from '../src/logger';
import { User } from '../src/types';
import { SystemAction } from '../src/types';
import { Action } from '../src/types';

describe('LoggerInstance', () => {
  let logger: LoggerInstance;
  let logger2: LoggerInstance;

  const user1: User = { id: 1, name: 'Eduardo' };
  const user2: User = { id: 2, name: 'Jean' };
  
  const action1: Action = { user: user1, systemAction: SystemAction.CREATE, date: new Date('2025-03-20') };
  const action2: Action = { user: user1, systemAction: SystemAction.READ, date: new Date('2025-03-21') };
  const action3: Action = { user: user2, systemAction: SystemAction.UPDATE, date: new Date('2025-03-22') };

  const actionsToInsert = [action1, action2, action3]

  logger = LoggerInstance.getLoggerInstance()

  logger.setItems(actionsToInsert)

  it('Singleton behavior', () => {
    logger2 = LoggerInstance.getLoggerInstance()
    expect(logger).toBe(logger2)
  });

  it('Iterable behavior with for...of', () => {
    const actionsIterated: Action[] = [];
    for (const action of logger) {
      actionsIterated.push(action);
    }
    expect(actionsIterated).toEqual(actionsToInsert);
  });

  it('getInformationOf User', () => {
    const user1Actions = logger.getInformationOf(user1);
    expect(user1Actions).toEqual([action1, action2]);
  
    const user2Actions = logger.getInformationOf(user2);
    expect(user2Actions).toEqual([action3]);
  });

  it('getActions from a SystemAction - valid action', () => {
    const createActions = logger.getActions(SystemAction.CREATE);
    expect(createActions).toEqual([action1]);

    const updateActions = logger.getActions(SystemAction.UPDATE);
    expect(updateActions).toEqual([action3]);
  });

  it('getActions from a SystemAction - no matching actions', () => {
    const deleteActions = logger.getActions(SystemAction.DELETE);
    expect(deleteActions).toEqual([]); 
  });

  it('getDatesInformation method', () => {
    const actions = logger.getDatesInformation(new Date('2025-03-20'), new Date('2025-03-21'));
    expect(actions).toEqual([action1, action2]);
  });

  it('getDatesInformation - same dates', () => {
    const result = logger.getDatesInformation(new Date('2025-03-20'), new Date('2025-03-20'));
    expect(result).toBeUndefined()
  });

  it('getDatesInformation - no matching dates', () => {
    const actions = logger.getDatesInformation(new Date('2025-03-23'), new Date('2025-03-24'));
    expect(actions).toEqual([]);
  });

  it('Empty actions list', () => {
    logger.setItems([]); 
    const user1Actions = logger.getInformationOf(user1);
    expect(user1Actions).toEqual([]); 
  });

  it('Singleton behavior after reset', () => {
    const logger2 = LoggerInstance.getLoggerInstance();
    logger2.setItems([]); 
    expect(logger.getInformationOf(user1)).toEqual([]);
  });
});