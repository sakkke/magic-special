export class ShutdownCommand {
    command: string
    args: string[]

    constructor (command: string, args: string[] = []) {
        this.command = command
        this.args = args
    }
}

export function getShutdownCommand(): ShutdownCommand {
    const { os } = Deno.build
    switch (os) {
        case 'linux':
            return new ShutdownCommand('/sbin/poweroff')
            ;;
        default:
            throw new Error(`${os} is not supported`)
    }
}

export function shutdown(): void {
    const { command, args } = getShutdownCommand()
    const shutdown = new Deno.Command(command, { args })
    shutdown.spawn()
}