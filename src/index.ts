import 'reflect-metadata'
import { container } from '@oajarvis/npm-test';
import { injectable } from 'inversify';

interface IFoo {
    hello(): void;
}

@injectable()
class Foo implements IFoo {
    public hello(): void {
        console.log('hello world');
    }
}

let typeFoo = Symbol.for("IFoo");
container.bind<IFoo>(typeFoo).to(Foo);

const foo: IFoo = container.get<IFoo>(typeFoo);

foo.hello();