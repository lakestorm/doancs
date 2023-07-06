#include<iostream>
using namespace std;
int main() {
    for (int i = 0; i < 51; i++) {
        cout << "//" << i << endl;
        cout << "{" << endl;
        cout << "  question: \"\"," << endl;
        cout << "  answers: [\"A. \", \"B. \", \"C. \", \"D. \"]," << endl;
        cout << "  correctAnswerIndex: 1," << endl;
        cout << "  difficulty: \"Trung binh\"" << endl;
        cout << "}," << endl;
    }
    return 0;
}
