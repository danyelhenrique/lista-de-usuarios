def BracketCompare(input: str) -> bool:
    a_stack = []
    for i in input:
        if i in '({[':
            a_stack.append(i)
        elif i in '}])':
            if a_stack == []:
                return 'Não'
            else:
                poped = a_stack.pop()
                if poped == '(' and i != ')':
                    return 'Não'
                elif poped == '[' and i != ']':
                    return 'Não'
                elif poped == '{' and i != '}':
                    return 'Não'
    return 'Sim' if len(a_stack) == 0 else 'Não'


data = input('Entr com um Input:')
comparations = BracketCompare(data)
print(f'Seu input foi {data}.')
print(f'o resultado foi {comparations}.')
