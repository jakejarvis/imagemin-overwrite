type Plugin = (input: Buffer) => Promise<Buffer>;

interface Options {
 destination?: string;
 plugins: ReadonlyArray<Plugin>;
 glob?: boolean;
}

interface Result {
 data: Buffer;
 sourcePath: string;
 destinationPath: string;
}

interface BufferOptions {
 plugins: ReadonlyArray<Plugin>;
}

function buffer(buffer: Buffer, options?: BufferOptions): Promise<Buffer>;

export default function imagemin(input: ReadonlyArray<string>, options?: Options): Promise<Result[]>;
