export default {
  name: "example1",
  color: "#FFF",
  children: [
    {
      name: "example2",
      color: "#3BB9FF",
      children: [
        {
          name: "example3",
          color: "#736AFF",

          children: [
            {
              name: "example4",
              color: "blue",
              size: 89,
            },
            {
              name: "example5",
              color: "#2C9E4B",
              size: 10,
            },
            {
              name: "example6",
              color: "#2C9E4B",
              size: 40,
              children: [
                {
                  name: "example66",
                  color: "#2C9E4B",
                  size: 10,
                },
              ],
            },
          ],
        },
        {
          name: "example7",
          color: "#810541",
          size: 63,
        },
        {
          name: "example8",
          color: "#20B2AA",
          size: 18,
        },
      ],
    },
    {
      name: "example9",
      color: "#F78608",

      children: [
        {
          name: "example10",
          color: "#9E7BFF",
          size: 40,
        },
        {
          name: "example11",
          color: "#EE3716",
          size: 2,
        },
        {
          name: "example12",
          color: "#EE3717",
          size: 50,
          children: [
            {
              name: "example13",
              color: "#E6172F",
              size: 20,
            },
          ],
        },
      ],
    },
  ],
};
