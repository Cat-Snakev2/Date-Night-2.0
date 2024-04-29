// //  ❤️❤️ ❤️❤️ ❤️❤️
// // DateIdeas.js
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const DateIdeas = ({ ideas }) => {
//   const [dateSuggestions, setDateSuggestions] = useState([])
//   const [showSuggestions, setShowSuggestions] = useState(false)

//   // Function to fetch date suggestions from the server based on user answers
//   const fetchDateSuggestions = async () => {
//     try {
//       const response = await axios.post('/date-suggestions', { answers: ideas })
//       setDateSuggestions(response.data.suggestions)
//       setShowSuggestions(true) // Set to true to display suggestions
//     } catch (error) {
//       console.error('Error fetching date suggestions:', error)
//     }
//   }

//   // Fetch date suggestions when component mounts
//   useEffect(() => {
//     fetchDateSuggestions()
//   }, [ideas])

//   return (
//     <div>
//       {showSuggestions ? (
//         <div>
//           <h2>Date Ideas</h2>
//           <p>Here are some date ideas based on your preferences:</p>
//           <ul>
//             {dateSuggestions.map((suggestion, index) => (
//               <li key={index}>{suggestion}</li>
//             ))}
//           </ul>
//           <p>Are you satisfied with these suggestions?</p>
//           {/* Add buttons for user response */}
//           <button className="button" onClick={() => setShowSuggestions(false)}>
//             No
//           </button>
//           <button className="button" onClick={() => setShowSuggestions(true)}>
//             Yes
//           </button>
//         </div>
//       ) : (
//         <p>Loading date suggestions...</p>
//       )}
//     </div>
//   )
// }

// export default DateIdeas

// // Test (Fetch)
// // DateIdeas.js
// DateIdeas.js
import React, { useState, useEffect } from 'react'

const DateIdeas = ({ ideas }) => {
  const [dateSuggestions, setDateSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const fetchDateSuggestions = async () => {
    try {
      const response = await fetch('/date-suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ answers: ideas })
      })
      const data = await response.json()
      setDateSuggestions(data.suggestions)
      setShowSuggestions(true)
    } catch (error) {
      console.error('Error fetching date suggestions:', error)
    }
  }

  useEffect(() => {
    fetchDateSuggestions()
  }, [ideas])

  return (
    <div>
      {showSuggestions ? (
        <div>
          <h2>Date Ideas</h2>
          <p>Here are some date ideas based on your preferences:</p>
          <ul>
            {dateSuggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
          <p>Are you satisfied with these suggestions?</p>
          {/* Add buttons for user response */}
          <button onClick={() => setShowSuggestions(false)}>No</button>
          <button onClick={() => setShowSuggestions(true)}>Yes</button>
        </div>
      ) : (
        <p>Loading date suggestions...</p>
      )}
    </div>
  )
}

export default DateIdeas
