import { InMemoryStudentsRepository } from "../../../tests/repositories/in-memory-challenge-repository";
import { InMemoryChallengessRepository } from "../../../tests/repositories/in-memory-students-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { CreateChallengeSubmission } from "./create-challenge-submission"

// Method AAA: Arrange, Act, Assert

describe('Create Challenge submission use case', () => {
    it('should be able create a submission', async () => {

        //Arrange
        const challengessRepository = new InMemoryChallengessRepository();
        const studentsRepository = new InMemoryStudentsRepository();
        
        const student = Student.create({
            name: 'Rafa',
             email: 'angelo1Angelin@hotmail.com'
        })

        const challenge = Challenge.create({
            title: 'Desafio hard',
            challangeUrl: 'www.meudesafioHard.com'
        })

        studentsRepository.items.push(student);
        challengessRepository.items.push(challenge);

        const sut = new CreateChallengeSubmission(
            studentsRepository,
            challengessRepository, 
            
        );


        //Action
        const response = await sut.execute({
            studentId: student.id,
            challengeId: challenge.id
        })

        //Assert
        expect(response.props).toHaveProperty('studentId');
        expect(response).toBeTruthy();
    })
})

