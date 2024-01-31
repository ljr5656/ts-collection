//#region array
type GetFirst<T extends unknown[]> = T extends [infer F, ...unknown[]] ? F : never;
type GetLast<T extends unknown[]> = T extends [...unknown[], infer L] ? L : never;
type PopArr<T extends unknown[]> = T extends [...infer R, unknown] ? R : never;
type ShiftArr<T extends unknown[]> = T extends [unknown, ...infer R] ? R : never;


type arr = [1, '2', undefined];
type res = GetFirst<arr>;
type res2 = GetLast<arr>;
type res3 = PopArr<arr>;
type res4 = ShiftArr<arr>;
//#endregion

//#region string
type StartsWith<Str extends string, Prefix extends string> = Str extends `${Prefix}${string}` ? true : false;
type ReplaceStr<Str extends string, From extends string, To extends string> = Str extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${Suffix}` : Str


type TrimStrLeft<Str extends string> = Str extends `${infer Rest}${' ' | '\n' | '\t'}` ? TrimStrLeft<Rest> : Str;
type TrimStrRight<Str extends string> = Str extends `${' ' | '\n' | '\t'}${infer Rest}` ? TrimStrRight<Rest> : Str;
type TrimStr<Str extends string> = TrimStrLeft<TrimStrRight<Str>>;

type str = "hello world";
type res5 = StartsWith<str, "hello">;
type str2 = "   hello   ";
type res6 = TrimStr<str2>;
//#endregion


//#region function
//#endregion
