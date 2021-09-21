import Entity from 'redux/models/Entity';

const action = () => {
    return (takeTarget: any) => {
        const entityName = takeTarget.constructor.name;
        const entityItem = entityName in Entity.action ? Entity.action[entityName] : {};
        Entity.action[entityName] = entityItem;
    };
};

export default action