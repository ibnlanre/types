export type Collect<List> = List extends unknown[] ? List : [List];
