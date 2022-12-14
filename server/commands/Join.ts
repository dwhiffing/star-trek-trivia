import { Command } from '@colyseus/command'
import { Player, RoomState } from '../schema'

export class JoinCommand extends Command<RoomState, { playerId: string }> {
  execute({ playerId, name }) {
    const player = new Player(playerId, this.state.players.length, 0)
    player.name = name
    this.state.players.push(player)

    if (!this.state.players.some((p) => p.isAdmin)) {
      player.isAdmin = true
    }
  }
}
