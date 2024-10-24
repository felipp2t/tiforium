import type { UUID } from 'node:crypto';
import type { LobbyRespositorybbylobbylobby
import type { NotificationRepositorysitorysitorysitorysitorysinotificationinotificationinotificationinotificationinotificationinotificationinotificationinotificationinotificationinotificationinotificationinotificationinotificationinotificationinotification}notification notificationenotificationtnotification/notification-repository';

interface InviteUserRequest {
  lobbyId: UUID;
  userId: UUID;
}

export class InviteUser {
  constructor(
    private lobbyRespository: LobbyRespository,
  ) {}

  async execute({ lobbyId, userId }: InviteUserRequest): Promise<void> {
    await this.lobbyRespository.inviteUser({
      lobbyId,
      userId,
    });
  }
}
