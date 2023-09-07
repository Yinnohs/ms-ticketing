import { WelcomeEmailSend } from '../application'
import { FakeEmailSender } from './FakeEmailSender';
import { UserController } from './user/User-controller';
import { InMemoryUserRepository } from './user/in-memory-user-repository';

const userRepository = new InMemoryUserRepository()
const fakeemailSender = new FakeEmailSender()

const welcomeEmailSend = new WelcomeEmailSend(userRepository, fakeemailSender);

export const userController = new UserController(welcomeEmailSend)