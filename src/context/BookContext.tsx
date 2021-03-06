import React, { createContext, useReducer } from 'react'
import reducer from '../reducer/BookReducer'

interface Props {
    children:any
}

export const BookContext = createContext<any>({});

const BookContextProvider = (props:Props) => {
    
    const [books, dispatch] = useReducer(reducer, {
    book : [
                {
                    "id": "1",
                    "isbn": "9781393495574",
                    "title": "The Accursed God",
                    "author": "Vivek Dutta Mishra",
                    "pages": "380",
                    "price": "199",
                    "ratings": "4.9",
                    "votes": "49",
                    "details": "THE LOST EPIC ============ The story of the epic battle of Kurukshetra has been told and retold for ages. Millennia of dust, fables, imaginations — and the epic itself is lost. What remained is the story of a family feud and ambition of Kauravas and Pandavas. But why, then, was this an epic war? Why entire Aryavart plunged into this first real world-war? Why the echo of this ancient war still resonates after all those centuries? Rediscover the lost epic whose origin lies in the birth of the Kurukshetra that had tasted its first blood over a hundred years before the final Mahabharata war. Discover the complete saga of Mahabharata which goes far and beyond just Kauravas and Pandavas and their ambitions. THE ACCURSED GOD ================ Long before the epic battle, long before even the birth of Kurukshetra, a man swore on his father’s pyre to avenge against the mightiest empire, any civilization had ever seen. Between his might and near-certain destruction of the Empire, stood a warrior, who rose like a phoenix from the ashes of his seven dead brothers — taking the mantle of a fabled Accursed God",
                    "image": "http://thelostepic.com/wp-content/uploads/2021/04/THE-ACCURSED-GOD-Front-780x1100-1.jpg"
                },
                {
                    "id": "2",
                    "isbn": "9781408855652",
                    "title": "Harry Potter and the Philosopher's Stone",
                    "author": "JK Rowling",
                    "pages": "352",
                    "price": "340",
                    "ratings": "4.7",
                    "votes": "10192",
                    "details": "Harry Potter and the Philosopher's Stone was J.K. Rowling's first novel, followed by the subsequent six titles in the Harry Potter series, as well as three books written for charity: Fantastic Beasts and Where to Find Them, Quidditch Through the Ages and The Tales of Beedle the Bard. The Harry Potter novels have now sold over 450 million copies worldwide and been translated into 78 languages.",
                    "image": "https://mypostercollection.com/wp-content/uploads/2018/09/Harry-Potter-Poster-2001-MyPosterCollection.com-1.jpg"
                },
                {
                    "id": "3",
                    "isbn": "1408855666",
                    "title": "Harry Potter and theHarry Potter and the Chamber of Secrets ",
                    "author": "JK Rowling",
                    "pages": "384",
                    "price": "340",
                    "ratings": "4.7",
                    "votes": "8518",
                    "details": "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone . Dobby's sinister predictions seem to be coming true.",
                    "tags": [
                        "harry potter",
                        "fiction",
                        "fantasy",
                        "best-seller"
                    ],
                    "series": "Harry Potter",
                    "seriesIndex": "2",
                    "releaseDate": "1998-07-01T18:30:00.000Z",
                    "image": "https://kbimages1-a.akamaihd.net/1c469dcb-5d48-47cb-a61b-5298babdb0d3/1200/1200/False/harry-potter-and-the-chamber-of-secrets-6.jpg"
                },
                {
                    "id": "4",
                    "isbn": "1408855674",
                    "title": "Harry Potter and the Prisoner of Azkaban ",
                    "author": "JK Rowling",
                    "pages": "480",
                    "price": "400",
                    "ratings": "4.6",
                    "votes": "4850",
                    "details": "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.",
                    "image": "https://fanart.tv/fanart/movies/673/movieposter/harry-potter-and-the-prisoner-of-azkaban-5d9bec01d67eb.jpg"
                },
                {
                    "id": "5",
                    "isbn": "1408855682",
                    "title": "Harry Potter and the Goblet of Fire",
                    "author": "JK Rowling",
                    "pages": "640",
                    "price": "450",
                    "ratings": "4.7",
                    "votes": "4503",
                    "details": "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.",
                    "image": "https://amc-theatres-res.cloudinary.com/v1579118317/amc-cdn/production/2/movies/10200/10250/Poster/p_800x1200_AMC_HarryPotterandtheGobletofFire_06302019.jpg"
                },
                {
                    "id": "6",
                    "isbn": "9781408855690",
                    "title": "Harry Potter and the Order of the Phoenix",
                    "author": "JK Rowling",
                    "pages": "816",
                    "price": "509",
                    "ratings": "4.7",
                    "votes": "4519",
                    "details": "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks",
                    "image": "https://oldisgoldgames.com/wp-content/uploads/2018/01/Harry-Potter-and-The-Order-of-the-Phoenix-Free-Download.jpg"
                },
                {
                    "id": "7",
                    "isbn": "9781408855706",
                    "title": "Harry Potter and the Half Blood Prince",
                    "author": "JK Rowling",
                    "pages": "560",
                    "price": "400",
                    "ratings": "4.7",
                    "votes": "5651",
                    "details": "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks",
                    "image": "https://cdn01.sapnaonline.com/product_media/9781408855706/md_9781408855706.jpg"
                },
                {
                    "id": "8",
                    "isbn": "1408894742",
                    "title": "Harry Potter and the Deathly Hallows",
                    "author": "JK Rowling",
                    "pages": "640",
                    "price": "550",
                    "ratings": "4.7",
                    "votes": "7262",
                    "details": "Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the Harry Potter series. It was released on 21 July 2007 in the United Kingdom by Bloomsbury Publishing, in the United States by Scholastic, and in Canada by Raincoast Books. The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005) and the final confrontation between the wizards Harry Potter and Lord Voldemort.",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/811t1pfIZXL.jpg"
                },
                {
                    "id": "9",
                    "isbn": "9781509808694",
                    "title": "Kane and Abel",
                    "author": "Jeffrey Archer",
                    "pages": "250",
                    "price": "199",
                    "ratings": "4.1",
                    "votes": "2367",
                    "details": "They had only one thing in common . . . William Lowell Kane and Abel Rosnovski: one the son of a Boston millionaire, the other of a penniless Polish immigrant. Two men born on the same day, on opposite sides of the world, their paths destined to cross in the ruthless struggle to build a fortune. A memorable story, spanning sixty years, of two powerful men linked by an all-consuming hatred, brought together by fate to save – and finally destroy – each other. ‘The ultimate novel of sibling rivalry’ Dan Brown",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/81Y8QLPFFlL.jpg"
                },
                {
                    "id": "10",
                    "isbn": " 8193387627",
                    "title": "The Count of Monte Cristo",
                    "author": "Alexandre Dumas",
                    "pages": "932",
                    "price": "350",
                    "ratings": "4.5",
                    "votes": "1139",
                    "details": "The Count of Monte Cristo (French: Le Comte de Monte-Cristo) is an adventure novel by French author Alexandre Dumas (père) completed in 1844. It is one of the author's more popular works, along with The Three Musketeers. Like many of his novels, it was expanded from plot outlines suggested by his collaborating ghostwriter Auguste Maquet.[1] Another important work by Dumas, written before his work with Maquet, was the 1843 short novel Georges; this novel is of particular interest to scholars because Dumas reused many of the ideas and plot devices later in The Count of Monte Cristo.[2] The story takes place in France, Italy, and islands in the Mediterranean during the historical events of 1815–1839: the era of the Bourbon Restoration through the reign of Louis-Philippe of France. It begins just before the Hundred Days period (when Napoleon returned to power after his exile). The historical setting is a fundamental element of the book, an adventure story primarily concerned with themes of hope, justice, vengeance, mercy, and forgiveness. It centres on a man who is wrongfully imprisoned, escapes from jail, acquires a fortune, and sets about exacting revenge on those responsible for his imprisonment. His plans have devastating consequences for both the innocent and the guilty. The book is considered a literary classic today. ",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/61qF6xsWq3L.jpg"
                },
                {
                    "id": "11",
                    "isbn": "0007527519",
                    "title": "Five Little Pigs",
                    "author": "Agatha Christie",
                    "pages": "288",
                    "price": "180",
                    "ratings": "4.6",
                    "votes": "605",
                    "details": "The Count of Monte Cristo (French: Le Comte de Monte-Cristo) is an adventure novel by French author Alexandre Dumas (père) completed in 1844. It is one of the author's more popular works, along with The Three Musketeers. Like many of his novels, it was expanded from plot outlines suggested by his collaborating ghostwriter Auguste Maquet.[1] Another important work by Dumas, written before his work with Maquet",
                    "image": "https://kbimages1-a.akamaihd.net/d54608a2-1499-47eb-bd78-e96b384c49e5/1200/1200/False/five-little-pigs.jpg"
                },
                {
                    "id": "12",
                    "isbn": "8129135728",
                    "title": "Half Girl Friend",
                    "author": "Chetan Bhagat",
                    "pages": "280",
                    "price": "180",
                    "ratings": "3.2",
                    "votes": "8300",
                    "details": "Half Girlfriend is an Indian English coming of age, young adult romance novel by Indian author Chetan Bhagat.[1] The novel, set in rural Bihar, New Delhi, Patna, and New York, is the story of a Bihari boy in quest of winning over the girl he loves.[2][3] This is Bhagat's sixth novel which was released on 1 October 2014[4] by Rupa Publications. The novel has also been published in Hindi[5] and Gujarati[6] versions as well. Dedicated to 'non English-types', as Chetan Bhagat wrote, the book divulges the sentiments and linguistic struggles of a backward rural Bhojpuri-laced Hindi-speaking boy from Bihar as he enrolls himself at the prestigious English-medium St. Stephen’s College, New Delhi, and falls in love with a 'high class English-speaking rich Delhi girl' schooled at Modern School, New Delhi. The girl does not admit the relationship but agrees to be his 'half girlfriend'.[7] Chetan Bhagat commented, 'Half-Girlfriend, to me, is a unique Indian phenomenon, where boys and girls are not clear about their relationship status with each other. A boy may think he is more than friends with the girl, but the girl is still not his girlfriend. Hence, I thought we needed a term like 'Half girlfriend'. Because, in India, that is what most men get.'[7]",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/712HEn9SNwL.jpg"
                },
        ],
      user : [
            {
                "name": "g",
                "email": "g@gmail.com",
                "password": "1234",
                "passwordConfirm": "1234",
              },{
                "name": "l",
                "email": "l@gmail.com",
                "password": "1234",
                "passwordConfirm": "1234",
              },{
    
                "name": "gs",
                "email": "sg@gmail.com",
                "password": "1234",
                "passwordConfirm": "1234",
              },
              {
                  "name": "LATHA",
               "email": "shekar6803@gmail.com",
               "password": "$2a$10$qPj6hY1xcwzEX5.aKhT.eujmRVhH3StkqrBZAfh5WNxCTKGj9HS2m",
                "passwordConfirm": "1234"}
            ],
            searchData: [],
        authenticate : false,
        token : '',
        message : 'Welcome 😃',
    });

    return (
        <BookContext.Provider value={{ books , dispatch}} >
            {props.children}
            </BookContext.Provider>
    )
}

export default BookContextProvider;