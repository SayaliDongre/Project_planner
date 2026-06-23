import re

def check_brackets(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    # Remove comments and strings for accurate counting
    text = re.sub(r'//.*', '', text)
    text = re.sub(r'/\*.*?\*/', '', text, flags=re.DOTALL)
    text = re.sub(r'".*?"', '', text)
    text = re.sub(r"'.*?'", '', text)
    text = re.sub(r'`[^`]*`', '', text)

    stack = []
    lines = text.split('\n')
    for i, line in enumerate(lines):
        for char in line:
            if char in '{[(':
                stack.append((char, i+1))
            elif char in '}])':
                if not stack:
                    print(f"Unmatched {char} at line {i+1}")
                    return False
                last, _ = stack.pop()
                if (char == '}' and last != '{') or \
                   (char == ']' and last != '[') or \
                   (char == ')' and last != '('):
                    print(f"Mismatched {char} at line {i+1}, expected match for {last}")
                    return False
    
    if stack:
        for char, line in stack:
            print(f"Unclosed {char} at line {line}")
        return False

    print("Brackets are balanced.")
    return True

check_brackets('script.js')
