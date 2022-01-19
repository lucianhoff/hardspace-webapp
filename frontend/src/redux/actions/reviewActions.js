import axios from "axios";

const reviewAction = {
  newReview: (review) => {
    return async (dispatch, getState) => {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          "https://hardspace-webapp.herokuapp.com/api/reviews",
          { ...review },
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        return { success: true };
      } catch (error) {
        return { error: error };
      }
    };
  },
  editReview: (reviewEdit) => {
    return async (dispatch, getState) => {
      try {
        const token = localStorage.getItem("token");
        await axios.put(
          "https://hardspace-webapp.herokuapp.com/api/reviews",
          { ...reviewEdit },
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        let data = await axios.get(
          "https://hardspace-webapp.herokuapp.com/api/reviews"
        );
        return { success: true, response: data };
      } catch (error) {
        return { error: error };
      }
    };
  },
  deleteReview: (reviewDelete) => {
    return async (dispatch, getState) => {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(
          "https://hardspace-webapp.herokuapp.com/api/reviews",

          {
            data: reviewDelete,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return { success: true };
      } catch (error) {
        return { error: error };
      }
    };
  },
}
export default reviewAction;
