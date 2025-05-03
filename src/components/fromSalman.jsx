export async function receiveDataFromDjango(address) {
    try {
      const response = await fetch(address);
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const result = await response.json();
  
      console.log("Data received successfully:", result);
  
      if (result && result.audio_url) {
        const audio = new Audio(result.audio_url);
  
        #newly added
        audio.oncanplaythrough = () => {
          audio.play().catch(err => {
            console.error("Audio play failed:", err);
          });
        };
        #newly added
        audio.preload = "auto";
      } else {
        console.warn("No audio_url found in response.");
      }
  
      return result;
    } catch (error) {
      console.error("Error receiving data:", error);
      return null;
    }
  }


  export async function receiveDataFromDjango(address) {
    try {
      const response = await fetch(address);
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const result = await response.json();
      return result;
      console.log("Data sent successfully:", result);
    } catch (error) {
      console.error("Error sending data:", error);
      return null;
    }
  }
  