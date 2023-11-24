/* eslint-disable no-unused-vars */
export interface UseCase<X, Y> {
  execute(x: X): Promise<Y>
}
