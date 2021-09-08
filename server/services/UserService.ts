import BaseContext from '../baseContext';

export default class UserService extends BaseContext {
    public findAll() {
        const { User } = this.di;
        return User.find({});
    }

    public async save(body, id) {
        const { User } = this.di;
        let user = await User.findById(id);
        if (user) {
            user.set(body);
        } else {
            user = new User(body);
        }
        return user.save();
    }

    public findOneByID(id) {
        const { User } = this.di;
        return User.findById(id);
    }