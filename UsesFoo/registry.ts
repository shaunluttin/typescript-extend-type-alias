interface FooRegistry {
    'bar': 'bar';
    'baz': 'baz';
}

type Foo = keyof FooRegistry;