import Notification from '../schemas/Notification';

class NotificationController {
  async store(req, res) {
    return res.json({ ok: true });
  }
}

export default new NotificationController();
