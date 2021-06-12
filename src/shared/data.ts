export const LIFTS = {
  BACK_SQUAT: 'BACK SQUAT',
  DEADLIFT: 'DEADLIFT',
  ROMANIAN_DEADLIFT: 'ROMANIAN DEADLIFT',
  DB_WALKING_LUNGE: 'DB WALKING LUNGE',
  BARBELL_HIP_THRUST: 'BARBELL HIP THRUST',
  LEG_EXTENSION: 'LEG EXTENSION',
  LAT_PULLDOWN: 'LAT PULLDOWN',
  REVERSE_GRIP_LAT_PULLDOWN: 'REVERSE GRIP LAT PULLDOWN',
  LYING_LEG_CURL: 'LYING LEG CURL',
  STANDING_CALF_RAISE: 'STANDING CALF RAISE',
  SINGLE_LEG_LYING_LEG_CURL: 'SINGLE-LEG LYING LEG CURL',
  SINGLE_LEG_LEG_EXTENSION: 'SINGLE-LEG LEG EXTENSION',
  MACHINE_SEATED_HIP_ABDUCTION: 'MACHINE SEATED HIP ABDUCTION',
  CRUNCH: 'CRUNCH',
  PLANK: 'PLANK',
  BARBELL_BENCH_PRESS: 'BARBELL BENCH PRESS',
  DB_INCLINE_PRESS: 'DB INCLINE PRESS',
  MILITARY_PRESS: 'MILITARY PRESS',
  CABLE_FLY: 'CABLE FLY',
  ASSISTED_DIP: 'ASSISTED DIP',
  DUMBBELL_SKULL_CRUSHER: 'DUMBBELL SKULL CRUSHER',
  SINGLE_ARM_ROPE_TRICEP_EXTENSION: 'SINGLE-ARM ROPE TRICEP EXTENSION',
  DUMBBELL_LATERAL_RAISE: 'DUMBBELL LATERAL RAISE',
  SUPINATED_PULLDOWN: 'SUPINATED PULLDOWN',
  CABLE_SEATED_ROW: 'CABLE SEATED ROW',
  CHEST_SUPPORTED_T_BAR_ROW: 'CHEST-SUPPORTED T-BAR ,ROW',
  SEATED_FACE_PULL: 'SEATED FACE PULL',
  CABLE_REVERSE_FLY: 'CABLE REVERSE FLY',
  DUMBBELL_SUPINATED_CURL: 'DUMBBELL SUPINATED CURL',
};

export const FULL_BODY_DAY1 = [
  {
    name: 'Day 1',
    exercises: [
      {
        name: LIFTS.BACK_SQUAT,
        sets: 3,
        reps: 3,
        RPE: 7,
        rest: '3-4',
        trackedSets: [[], [], []],
        notes:
          'SIT BACK AND DOWN, 15° TOE FLARE, DRIVE YOUR KNEES OUT LATERALLY',
      },
      {
        name: LIFTS.BARBELL_BENCH_PRESS,
        sets: 3,
        reps: 8,
        RPE: 7,
        rest: '3-4',
        trackedSets: [[], [], []],
        notes:
          'TUCK ELBOWS AT A 45° ANGLE, SQUEEZE YOUR SHOULDER BLADES AND STAY FIRM ON THE BENCH',
      },
      {
        name: LIFTS.LAT_PULLDOWN,
        sets: 3,
        reps: 10,
        RPE: 8,
        rest: '2-3',
        trackedSets: [[], [], []],
        notes:
          'PULL YOUR ELBOWS STRAIGHT OUT TO YOUR SIDES, USE A 1.5X SHOULDER WIDTH GRIP',
      },
      {
        name: LIFTS.ROMANIAN_DEADLIFT,
        sets: 3,
        reps: 3,
        RPE: 7,
        rest: '3-4',
        trackedSets: [[], [], []],
        notes:
          "MAINTAIN A NEUTRAL LOWER BACK, SET YOUR HIPS BACK, DON'T ALLOW YOUR SPINE TO ROUND",
      },
      {
        name: LIFTS.ASSISTED_DIP,
        sets: 3,
        reps: 8,
        RPE: 7,
        rest: '1-2',
        trackedSets: [[], [], []],
        notes: 'TUCK ELBOWS AT A 45° ANGLE, LEAN YOUR TORSO FORWARD 15°',
      },
      {
        name: LIFTS.STANDING_CALF_RAISE,
        sets: 3,
        reps: 8,
        RPE: 7,
        rest: '1-2',
        trackedSets: [[], [], []],
        notes: 'TUCK ELBOWS AT A 45° ANGLE, LEAN YOUR TORSO FORWARD 15°',
      },
      {
        name: LIFTS.DUMBBELL_SUPINATED_CURL,
        sets: 3,
        reps: 10,
        RPE: 3,
        rest: '1-2',
        trackedSets: [[], [], []],
        notes:
          'DRIVE YOUR PINKY INTO THE HANDLE HARDER THAN YOUR POINTER FINGER',
      },
    ],
  },
];

export const FULL_BODY_DAY2 = [
  {
    name: 'Day 2',
    exercises: [
      {
        name: LIFTS.DEADLIFT,
        sets: 3,
        reps: 5,
        RPE: 7,
        rest: '3-4',
        trackedSets: [[], [], []],
        notes:
          'BRACE YOUR LATS, CHEST TALL, HIPS HIGH, PULL THE SLACK OUT OF THE BAR PRIOR TO MOVING IT OFF THE GROUND',
      },
      {
        name: LIFTS.MILITARY_PRESS,
        sets: 3,
        reps: 8,
        RPE: 8,
        rest: '3-4',
        trackedSets: [[], [], []],
        notes:
          'SQUEEZE YOUR GLUTES TO KEEP YOUR TORSO UPRIGHT, CLEAR YOUR HEAD OUT OF THE WAY, PRESS UP AND SLIGHTLY BACK',
      },
      {
        name: LIFTS.CHEST_SUPPORTED_T_BAR_ROW,
        sets: 3,
        reps: 12,
        RPE: 8,
        rest: '2-3',
        trackedSets: [[], [], []],
        notes:
          'RETRACT YOUR SCAPULAE DURING THE CONCENTRIC, PROTRACT YOUR SCAPULAE DURING THE ECCENTRIC',
      },
      {
        name: LIFTS.LEG_EXTENSION,
        sets: 3,
        reps: 3,
        RPE: 7,
        rest: '3-4',
        trackedSets: [[], [], []],
        notes: 'FOCUS ON SQUEEZING YOUR QUADS TO MAKE THE WEIGHT MOVE',
      },
      {
        name: LIFTS.CABLE_FLY,
        sets: 3,
        reps: 8,
        RPE: 7,
        rest: '1-2',
        trackedSets: [[], [], []],
        notes:
          'KEEP YOUR SCAPULAE RETRACTED, PULL YOUR INNER ELBOWS TOGETHER (NOT YOUR HANDS)',
      },
      {
        name: LIFTS.CRUNCH,
        sets: 3,
        reps: 8,
        RPE: 7,
        rest: '1-2',
        trackedSets: [[], [], []],
        notes:
          "FOCUS ON FLEXING YOUR SPINE, DON'T YANK YOUR HEAD WITH YOUR ARMS",
      },
      {
        name: LIFTS.DUMBBELL_SKULL_CRUSHER,
        sets: 3,
        reps: 10,
        RPE: 3,
        rest: '1-2',
        trackedSets: [[], [], []],
        notes:
          "KEEP YOUR ELBOWS IN LINE WITH THE TOP OF YOUR HEAD, DON'T LET YOUR UPPER ARM MOVE",
      },
    ],
  },
];

export const FULL_BODY_DAY3 = [
  {
    name: 'Day 3',
    exercises: [
      {
        name: LIFTS.DB_WALKING_LUNGE,
        sets: 3,
        reps: 10,
        RPE: 8,
        rest: '2-3',
        trackedSets: [[], [], []],
        notes:
          '10 STEPS EACH LEG. TAKE MEDIUM STRIDES, LET YOUR TORSO LEAN FORWARD',
      },
      {
        name: LIFTS.DB_INCLINE_PRESS,
        sets: 3,
        reps: 8,
        RPE: 8,
        rest: '3-4',
        trackedSets: [[], [], []],
        notes: 'KEEP YOUR SCAPULAE RETRACTED AND DEPRESSED',
      },
      {
        name: LIFTS.REVERSE_GRIP_LAT_PULLDOWN,
        sets: 3,
        reps: 10,
        RPE: 8,
        rest: '2-3',
        trackedSets: [[], [], []],
        notes:
          'PULL YOUR ELBOWS DOWN AGAINST YOUR SIDES, USE SHOULDER WIDTH GRIP',
      },
      {
        name: LIFTS.BARBELL_HIP_THRUST,
        sets: 3,
        reps: 12,
        RPE: 7,
        rest: '1-2',
        trackedSets: [[], [], []],
        notes:
          'TUCK YOUR CHIN AND RIB CAGE DOWN, ONLY MOVE YOUR HIPS. USE A PAD',
      },
      {
        name: LIFTS.SEATED_FACE_PULL,
        sets: 3,
        reps: 12,
        RPE: 8,
        rest: '1-2',
        trackedSets: [[], [], []],
        notes: 'PULL YOUR ARMS BACK AND OUT',
      },
      {
        name: LIFTS.DUMBBELL_LATERAL_RAISE,
        sets: 3,
        reps: 8,
        RPE: 7,
        rest: '1-2',
        trackedSets: [[], [], []],
        notes: 'TILT THE DUMBBELL SUCH THAT YOUR PINKY COMES UP FIRST',
      },
      {
        name: LIFTS.LYING_LEG_CURL,
        sets: 3,
        reps: 10,
        RPE: 8,
        rest: '1-2',
        trackedSets: [[], [], []],
        notes: 'FOCUS ON SQUEEZING YOUR HAMSTRINGS TO MAKE THE WEIGHT MOVE',
      },
    ],
  },
];

export const videos = [
  {
    name: LIFTS.BACK_SQUAT,
    video: 'https://www.youtube.com/watch?v=dW5-C1fsMjk',
  },
  {name: LIFTS.DEADLIFT, video: 'https://www.youtube.com/watch?v=fc4_hq7tjkU'},
  {
    name: LIFTS.ROMANIAN_DEADLIFT,
    video: 'https://www.youtube.com/watch?v=SE-2Y-3a1pY',
  },

  {
    name: LIFTS.DB_WALKING_LUNGE,
    video: ' https://www.youtube.com/watch?v=RjWiwq1wgFg&t=2s',
  },
  {
    name: LIFTS.BARBELL_HIP_THRUST,
    video: 'https://www.youtube.com/watch?v=RjWiwq1wgFg&t=2s',
  },

  {
    name: LIFTS.LEG_EXTENSION,
    video: 'https://www.youtube.com/watch?v=YyvSfVjQeL0',
  },

  {
    name: LIFTS.LYING_LEG_CURL,
    video: 'https://www.youtube.com/watch?v=1Tq3QdYUuHs',
  },

  {
    name: LIFTS.STANDING_CALF_RAISE,
    video: 'https://www.youtube.com/watch?v=7AVIgDN72c0',
  },

  {
    name: LIFTS.SINGLE_LEG_LEG_EXTENSION,
    video: 'https://www.youtube.com/watch?v=3VIpG6rtFAc',
  },

  {
    name: LIFTS.SINGLE_LEG_LYING_LEG_CURL,
    video: 'https://www.youtube.com/watch?v=lQSlJHtsnRA',
  },

  {
    name: LIFTS.MACHINE_SEATED_HIP_ABDUCTION,
    video: 'https://www.youtube.com/watch?v=-seSnS4N8Xo',
  },

  {name: LIFTS.CRUNCH, video: 'https://www.youtube.com/watch?v=NGRKFMKhF8s'},

  {name: LIFTS.PLANK, video: 'https://www.youtube.com/watch?v=kL_NJAkCQBg'},

  {
    name: LIFTS.BARBELL_BENCH_PRESS,
    video: 'https://www.youtube.com/watch?v=esQi683XR44',
  },

  {
    name: LIFTS.DB_INCLINE_PRESS,
    video: 'https://www.youtube.com/watch?v=ggJycLjz01E',
  },

  {
    name: LIFTS.MILITARY_PRESS,
    video: 'https://www.youtube.com/watch?v=CnBmiBqp-AI',
  },

  {name: LIFTS.CABLE_FLY, video: 'https://www.youtube.com/watch?v=KJwiu8ttuZ0'},

  {
    name: LIFTS.ASSISTED_DIP,
    video: 'https://www.youtube.com/watch?v=wjUmnZH528Y',
  },

  {
    name: LIFTS.DUMBBELL_SKULL_CRUSHER,
    video: 'https://www.youtube.com/watch?v=ZUZOn9c1VVI',
  },

  {
    name: LIFTS.SINGLE_ARM_ROPE_TRICEP_EXTENSION,
    video: 'https://www.youtube.com/watch?v=FxK2mF0iPXs',
  },

  {
    name: LIFTS.DUMBBELL_LATERAL_RAISE,
    video: 'https://www.youtube.com/watch?v=6m7JO28RqZg',
  },

  {
    name: LIFTS.SUPINATED_PULLDOWN,
    video: 'https://www.youtube.com/watch?v=apzFTbsm7HU',
  },

  {
    name: LIFTS.CABLE_SEATED_ROW,
    video: 'https://www.youtube.com/watch?v=4mRy8U542Fo',
  },

  {
    name: LIFTS.CHEST_SUPPORTED_T_BAR_ROW,
    video: 'https://www.youtube.com/watch?v=w0KnlQ-b7jw',
  },

  {
    name: LIFTS.SEATED_FACE_PULL,
    video: 'https://www.youtube.com/watch?v=HSoHeSjvIdY',
  },

  {
    name: LIFTS.CABLE_REVERSE_FLY,
    video: 'https://www.youtube.com/watch?v=QnXb1dh_RjQ',
  },

  {
    name: LIFTS.DUMBBELL_SUPINATED_CURL,
    video: 'https://www.youtube.com/watch?v=ykJmrZ5v0Oo',
  },
];
